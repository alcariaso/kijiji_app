import { GoogleLogin } from 'react-google-login'

const clientId = "391910508656-rle8fb2gr1b6k3fu19f60faudgoi3voa.apps.googleusercontent.com";
export default function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
      }
      
      const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
      }
      
    return (
        <div id="signInButton">
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      )

}