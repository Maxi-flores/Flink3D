import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

// <<< CHANGE THIS ONLY >>>
// Put the EXACT page/component name from Plasmic here:
const PLASMIC_PAGE = "Home"; // <-- change this if needed

export async function getServerSideProps() {
  const data = await PLASMIC.fetchComponentData(PLASMIC_PAGE);

  return {
    props: {
      __plasmicLoaderData: data
    }
  };
}

export default function Page() {
  return <PlasmicComponent component={PLASMIC_PAGE} />;
}
