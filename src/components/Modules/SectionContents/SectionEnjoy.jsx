import React from "react"
import SectionLayout from "../../Layouts/SectionLayout"
import EachUtils from "../../../utils/EachUtils"
import {
  LIST_CONTENT_1_EN,
  LIST_CONTENT_1_ID,
} from "../../../constants/listContent"
import { ENJOY_TV_IMAGE, ENJOY_TV_VIDEO } from "../../../constants/listAssets"
import { useAtom } from "jotai"
import { languangeAtom } from "../../../jotai/atoms"

const SectionEnjoy = () => {
  const [languange] = useAtom(languangeAtom)
  return (
    <SectionLayout>
      <EachUtils
        of={languange == "en" ? LIST_CONTENT_1_EN : LIST_CONTENT_1_ID}
        render={(item, index) => (
          <div key={index} className="px-8">
            <h2 className="font-black text-5xl">{item.title}</h2>
            <p className="text-2xl mt-4">{item.desc}</p>
          </div>
        )}
      />
      <div className="relative max-w-xl mx-auto">
        <img src={ENJOY_TV_IMAGE} alt="" className="relative z-10" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[73%]">
          <video autoPlay muted loop>
            <source src={ENJOY_TV_VIDEO} type="video/mp4" />
          </video>
        </div>
      </div>
    </SectionLayout>
  )
}

export default SectionEnjoy
