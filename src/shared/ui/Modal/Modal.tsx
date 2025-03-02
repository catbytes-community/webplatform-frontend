import React from "react";

interface ModalProps {
    onClose: React.MouseEventHandler<HTMLButtonElement>;
    onSubmit: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    modalTitle: string;
    buttonTitle: string;
}


export const Modal: React.FC<ModalProps> = (props) => {
    return(
        <>
        <div
            className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="border-0 p-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button
                    className="p-1 absolute right-2 top-0.5 text-black opacity-4 font-semibold"
                    onClick={props.onClose}
                  >
                    <span className="bg-transparent text-gray-400 opacity-4 text-xl font-medium">
                      ×
                    </span>
                  </button>
                <div className="flex items-start justify-center p-5 rounded-t">
                  <h3 className="text-3xl text-balance text-center">
                    {props.modalTitle}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {props.children}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-4 rounded-b">
                  <button
                    className="text-black border-2 border-solid border-black font-normal uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onSubmit}
                  >
                    {props.buttonTitle}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}