import { useContext, useState } from 'react';

import { createUser } from '../util/auth';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function signUpHandler({ email, password }) {
        setIsAuthenticating(true)
        try {
            const token = await createUser(email, password);

            authCtx.authenticate(token)
        } catch (error) {
            Alert.alert('Authentication failed!',
                'Please try again!'
            );
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message='Creating user...Please wait!' />
    }

    return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;