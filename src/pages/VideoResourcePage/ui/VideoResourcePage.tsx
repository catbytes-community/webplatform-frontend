import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Footer from "../../../shared/ui/Footer/Footer";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import { Carousel } from "../../../shared/ui";
import { useUser } from "../../../shared/lib/customHooks/useUser";
import "./VideoResourcePage.css";


type ResourceAudience = 'public' | 'member' | 'mentor';

type Resource = {
  id: string;
  title: string;
  audience: ResourceAudience | ResourceAudience[];
  tags: string[];
  description?: string | null;
  attachment_filename?: string | null;
  link?: string | null;
}

type VideoItem = {
  snippet: {
    thumbnails: {
      medium: {
        url: string;
      };
    };
    title: string;
    resourceId: {
      videoId: string;
    };
  };
};

const youtubeApi = 'https://www.googleapis.com/youtube/v3/playlistItems';
const apiKey = 'AIzaSyBxyNYafSBI9o_TWoejaSR-ADuO_qGWmjk';

const VideoResourcePage = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [activeVideoId, setActiveVideoId] = useState<string>('');
  const [resource, setResource] = useState<Resource>();
  const [playlistId, setPlaylistId] = useState<string>('');
  const [isUserHasAccess, setIsUserHasAccess] = useState<boolean>(false)

  const userIdFromLocalStorage = localStorage.getItem("userId") ? Number(localStorage.getItem("userId")) : null;
  const { user } = useUser(userIdFromLocalStorage);

  const selectVideo = (videoId: string) => {
    setActiveVideoId(videoId)
  }

  const checkVideoOrPlaylist = (link?: string | null) => {
    if (!link) return;

    try {
      const url = new URL(link);
      const path = url.pathname;

      if (path.includes('playlist')) {
        const playlistId = url.searchParams.get('list') ?? '';
       
        setPlaylistId(playlistId);
        return;
      }

      if (path.includes('watch')) {
        const videoId = url.searchParams.get('v') ?? undefined;

        if (videoId) setActiveVideoId(videoId);

        return;
      }

      return ;
    } catch (e) {
      console.error('Invalid URL:', e);
      return ;
    }
  }

  const checkUserHasAccess = useCallback(() => {
    if (!resource) {
      setIsUserHasAccess(false);
      return;
    }

    const userRoles = user?.roles.map(role => role.role_name) ?? [];
    const audiences = Array.isArray(resource.audience)
      ? resource.audience
      : [resource.audience];

    const hasAccess = audiences.includes('public') || audiences.some((role) => userRoles.includes(role));
    setIsUserHasAccess(hasAccess);
  }, [resource, user]);

  useEffect(() => {
    const fetchedResource: Resource = {
      id: crypto.randomUUID(),
      title: "Test resource",
      audience: ["mentor"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      tags: ["react", "javascript"],
      link: 'https://www.youtube.com/playlist?list=PLfvcvNruup8o8ANWqcn8tSfx4Hgr0H6dj',
    };

    setResource(fetchedResource);
  }, [])


  useEffect(() => {
    const getPlaylist = async (id: string) => {
      try {
        const response = await axios.get(
          `${youtubeApi}?part=snippet&maxResults=30&playlistId=${id}&key=${apiKey}`
        );

        const data = response.data;

        console.log(data.items);
        setVideos(data.items);
        setActiveVideoId(data.items[0].snippet.resourceId.videoId);
      } catch (e) {
        console.log(`Something went wrong when getting playlist videos: ${e}`);
      }
    }

    checkVideoOrPlaylist(resource?.link);

    if (playlistId) {
      getPlaylist(playlistId)
    }

  }, [playlistId, resource]);

  useEffect(() => {
    checkUserHasAccess();
  }, [checkUserHasAccess]);

  if (!resource) {
    return (
      <div> Resource loading ...</div>
    )
  }

  if (!isUserHasAccess) {
    return (
      <div><p>You don't have access to view this page</p></div>
    )
  }

  return (
    <div className="videoPage">
      <Navbar />
      <div className="videoPageHeader">
        <h2>{resource?.title}</h2>
      </div>
      
      <div className="videoPageContent">
        <div className="videoMainContent">
          <div className="videoContainer">
            <iframe
              className="videoFrame"
              src={`https://www.youtube.com/embed/${activeVideoId}`}
              title={resource?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {playlistId && (
              <div className="playlistCarouselWrapper">
                <Carousel items={videos} changeMainVideo={selectVideo} />
              </div>
            )}
          </div>

          <div className="descriptionCard">
            <p>{resource?.description}</p>
          </div>
        </div>
        <div className="tagsContainer">
          {resource?.tags.map(tag => (
            <div key={tag} className="tags">{tag}</div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default VideoResourcePage;