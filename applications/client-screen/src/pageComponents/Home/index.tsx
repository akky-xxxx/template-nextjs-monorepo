import { Fragment } from "react"

import { ClientFetch } from "@/clientComponents/ClientFetch"
import { SampleServerComponent } from "@/serverComponents/SampleServerComponent"

export const Home = () => (
  <Fragment>
    <h1>Home as temporary</h1>
    <SampleServerComponent />
    <ClientFetch />
  </Fragment>
)
