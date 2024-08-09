import React from "react"
import { JUMBOTRON_IMAGE } from "../../../constants/listAssets"
import EachUtils from "../../../utils/EachUtils"
import { useAtom } from "jotai"
import { languangeAtom } from "../../../jotai/atoms"
import { LIST_LANGUANGE } from "../../../constants/listLanguange"
import {
  LIST_JUMBOTRON_EN,
  LIST_JUMBOTRON_ID,
} from "../../../constants/listJumbotron"
import InputMembership from "../InputMembership"

const Jumbotron = () => {
  const [languange] = useAtom(languangeAtom)

  return (
    <div className="mb-24 px-8">
      <img
        className="absolute top-0 left-0 object-cover h-[700px] w-full opacity-60"
        src={JUMBOTRON_IMAGE}
        alt="netflix-bg"
      />
      <EachUtils
        of={languange == "en" ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID}
        render={(item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center mt-44 gap-4 text-center"
          >
            <h1 className="font-black text-white text-5xl">{item.title}</h1>
            <p className="text-white">{item.desc}</p>
            <InputMembership />
          </div>
        )}
      />
    </div>
  )
}

export default Jumbotron
