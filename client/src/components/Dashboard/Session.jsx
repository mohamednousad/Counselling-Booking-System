const Session = (props) => {
  return (
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#5c748a] text-sm font-normal leading-normal">
                  {props.date} | {props.time}
                </p>
                <p className="text-[#101518] text-base font-bold leading-tight">
                  {props.session}
                </p>
                <p className="text-[#5c748a] text-sm font-normal leading-normal">
                  Topic: {props.topic}
                </p>
              </div>
              <button className={`flex min-w-[84px] max-w-[480px] ${props.btnClr} cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse text-white  hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit`}>
                {props.state} Session
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
              style={{
                backgroundImage:`url(${props.image})`,
              }}
            ></div>
          </div>
        </div>
  );
};

export default Session;