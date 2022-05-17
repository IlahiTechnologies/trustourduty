export const uiConfig = firebase => {
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        privacyPolicyUrl: '/privacy-policy',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    }
}