import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../main";
import TextSpan from "../Components/Texts/TextSpan";

export default function TextSection() {


    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
    const [firstQuote, setFirstQuote] = useState(`It’s tech.+ It’s tailored.+ And it runs like magic.`.split(""))
    const [secondQuote, setSecondQuote] = useState(`So your+ ideas feel real,+ anywhere.`.split(""))





    return (
        <>
            <div className="w-full h-screen text-[54px] font-semibold jamjuree text-[#BBBBBB] bg-[#ffffff] content-center text-center relative pointer-events-none">

                    <div className="w-fit h-fit absolute justify-self-center bottom-1/2 right-0 left-0">
                        {firstQuote.map((letter, i) => {

                            return <TextSpan text={letter} id={`${letter + i}`} isFirst={true} />
                        }
                        )}
                    </div>

                    <div className="w-fit h-fit absolute justify-self-center bottom-1/2 right-0 left-0">

                        {secondQuote.map((letter, i) => {

                            return <TextSpan text={letter} id={`${letter + i}`} isFirst={false} />
                        }
                        )}
                    </div>



            </div>
        </>
    )
}


