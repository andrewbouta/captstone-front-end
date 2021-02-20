
const CHECKING_IMAGES = { cImage1: require('../assets/CheckingImage1.jpg'),
    cImage2: require('../assets/CheckingImage1.jpg')
}

export const CheckingLoop = [
    
    {
        title: "Everyday Personal Checking",
        description: "Banking made easy. Offering optional overdaraft protection coverage at no charge.",
        imageUrl: CHECKING_IMAGES.cImage1,
        time: 1200,
    },

    {
        title: "DBA - Checking Account",
        description: "Business Checking Account for businesses of all sizes. Manage your business's resources today. ",
        imageUrl: CHECKING_IMAGES.cImage2,
        //imageUrl: process.env.PUBLIC_URL + '/assets/CheckingImage2.jpg',
        time: 1200,
    }
];
