import style from './ApplicationsPage.module.css';
import { Application, MentorApplication } from '../../../app/types/global';
import { useEffect, useState } from 'react';
import { ApplicationBlock } from '../components/Application/ApplicationBlock';
import { MentorApplicationBlock } from '../components/Application/MentorApplicationBlock';
import axios from 'axios';
import Navbar from '../../../shared/ui/Navbar/Navbar';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

type Status = 'pending' | 'approved' | 'rejected' | 'active' | 'inactive';
type FilterLabel = 'All' | 'Pending review' | 'Approved' | 'Rejected' | 'Active' | 'Inactive';

const memberFilters: FilterLabel[] = ['All', 'Pending review', 'Approved', 'Rejected']; 
const mentorFilters: FilterLabel[] = ['All', 'Pending review', 'Active', 'Inactive', 'Rejected'];

export const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [mentorApplications, setMentorApplications] = useState<MentorApplication[]>([]);
  const [filter, setFilter] = useState<FilterLabel>('All');
  const [filterType, setFilterType] = useState<string>('Members');
  const navigate = useNavigate();

  
  const filterByStatus = <T extends { status: string }>(applications: T[] , filter: FilterLabel) => {

    const statusMap: Record<Exclude<FilterLabel, 'All'>, Status> = {
      'Pending review': 'pending',
      Approved: 'approved',
      Rejected: 'rejected',
      Active: 'active',
      Inactive: 'inactive'
    }

    if (filter === 'All') {
      return applications;
    }

    const status = statusMap[filter];

    return applications.filter(application => application.status === status);
  }

  useEffect(() => {
    try {
      // get member applications
      axios
        .get(`${import.meta.env.VITE_DEVAPI}applications`, {
          withCredentials: true,
        })
        .then((res) => {
          setApplications(filterByStatus<Application>(res.data.applications, filter));

          // get mentor applications
          const getMentors = async () => {
            const res = await axios.get(
              `${import.meta.env.VITE_DEVAPI}mentors`,
              {
                withCredentials: true,
              }
            );
            return res;
          };

          getMentors()
            .then((res) => {
              setMentorApplications(filterByStatus<MentorApplication>(res.data.mentors, filter));
            })
            .catch((err) => console.log('Error getting mentors', err));
        })
        .catch((error) => {
          console.error('Error fetching applications:', error);
          if (error.response?.status === 401) {
            signOut(auth)
              .then(() => {
                axios.post(
                  `${import.meta.env.VITE_DEVAPI}users/logout`,
                  {},
                  {
                    withCredentials: true,
                  }
                );
                localStorage.removeItem('user'); // Clear the user data from local storage
                navigate('/'); // Redirect to the home page
              })
              .catch((error) => {
                console.error(error);
              });

            window.location.href = '/login';
          }
        });
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  }, [filter]);

  return (
    <>
      <Navbar />
      <div
        className={`font-montserrat flex flex-col items-center ${style.container}`}
      >
        <h1 className="font-bold mb-5 text-xl mt-10">Applications</h1>
        <div className="flex gap-2 mt-5 mb-5">
          <button
            className={`${style.filterButtons} ${
              filterType === 'Members' ? 'bg-black text-white' : ''
            }`}
            onClick={() => setFilterType('Members')}
          >
            Members
          </button>
          <button
            className={`${style.filterButtons} ${
              filterType === 'Mentors' ? 'bg-black text-white' : ''
            }`}
            onClick={() => setFilterType('Mentors')}
          >
            Mentors
          </button>
        </div>
        <div className="w-full flex justify-center gap-1 sm:gap-5 p-5">
          {filterType === 'Members' && memberFilters.map(label => (
            <button 
            className={`${style.filterButtons} ${
              filter === label ? 'bg-black text-white' : ''}`}
              onClick={() => setFilter(label)}
              >
              {label}
            </button>
          ))}

          {filterType === 'Mentors' && mentorFilters.map(label => (
            <button 
            className={`${style.filterButtons} ${
              filter === label ? 'bg-black text-white' : ''}`}
              onClick={() => setFilter(label)}>
              {label}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto max-h-[70vh] flex flex-col gap-5 p-5">
          {filterType === 'Members' &&
            applications?.map((application) => (
              <ApplicationBlock
                key={application.id}
                application={application}
              />
            ))}

          {filterType === 'Mentors' &&
            mentorApplications?.map((application) => (
              <MentorApplicationBlock
                key={application.mentor_id}
                application={application}
              />
            ))}
        </div>
      </div>
    </>
  );
};
