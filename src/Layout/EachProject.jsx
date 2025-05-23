import { useEffect, useRef } from "react"

export default function EachProject({ id, colorCode1, colorCode2, translateY, scrollHeight, setCurrentProject, currentProject, image, mobile, description, setCurrentDescription }) {

    const eachprojectRef = useRef(null);

    const handleScroll = () => {
        // if (eachprojectRef.current) {
        const rect = document.getElementById(id).getBoundingClientRect();
        const windowHeight = window.innerHeight / 3;

        if (windowHeight >= rect.top) {
            // let tempArray = currentProject
            // tempArray.push(id)
            setCurrentProject(id)
            setCurrentDescription(description)
        }
    };

    useEffect(() => {

        handleScroll()

    }, [scrollHeight])

    return (
        <>

            {mobile ?
                <div className="h-screen w-full rounded-2xl bg-[white] shrink-0 p-2 relative">

                    <div className="w-full h-[60%] content-center">
                        <h3 className="text-3xl md:text-[54px] font-semibold jamjuree text-center">{currentProject}</h3>
                        <hr className="w-[67%] mx-auto border-[#1F1F1F1A] border-[1px] mt-[8%]" />
                        <div className="w-[70%] h-auto mx-auto text-center mt-[8%]">
                            <h3 className="text-[16px] jamjuree">
                                {description}
                            </h3>
                        </div>
                    </div>
                    <div
                        ref={eachprojectRef}
                        id={id}
                        className="w-full h-[40%] rounded-2xl relative"
                        style={{
                            background: colorCode2
                                ? `linear-gradient(to right, ${colorCode1}, ${colorCode2})`
                                : colorCode1,
                            // transform: `translateY(${translateY}px)`,
                            // transition: "transform 0.01s linear ease-out",
                            transform: `translateY(${translateY}px)`,
                            willChange: "transform",

                        }}
                    >
                        <img className="rounded-2xl object-cover object-center w-full h-full" src={image}></img>

                        <button className="w-[96%] bg-[#ffffff] h-[63px] rounded-2xl text-[18px] jamjuree text-[#00000081] absolute bottom-2 right-2 left-2">
                            Explore {currentProject}
                        </button>
                    </div>

                </div>

                :

                <div
                    ref={eachprojectRef}
                    id={id}
                    className="w-full h-full sticky top-0 rounded-2xl content-center text-center"
                    style={{
                        background: colorCode2
                            ? `linear-gradient(to right, ${colorCode1}, ${colorCode2})`
                            : colorCode1,
                        transform: `translateY(${translateY}px)`,
                        transition: "transform 0.01s linear ease-out",
                    }}
                >
                    <img src={image} className="w-full h-full object-cover puls object-center" />
                </div>

            }

        </>
    )
}

