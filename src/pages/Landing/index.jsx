import DefaultLayout from "../../components/Layouts/DefaultLayout"
import Jumbotron from "../../components/Modules/Jumbotron"
import SectionEnjoy from "../../components/Modules/SectionContents/SectionEnjoy"

function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
    </DefaultLayout>
  )
}

export default Landing
