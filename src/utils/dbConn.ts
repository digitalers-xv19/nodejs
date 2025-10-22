import { connect } from "mongoose";

export const dbConn = (URI:string) => connect(URI)
    .then( _ => console.log('database connected'))
    .catch( err => console.log(err))