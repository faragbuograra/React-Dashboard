import axios from 'axios';



const ONESIGNAL_API_SENDING = 'https://onesignal.com/api/v1/notifications';
const ONESIGNAL_APP_ID = 'cd480582-f00d-4d4b-8577-ea96671e72a6';
const ONESIGNAL_REST_API_KEY = 'NWQ3ZGMxZTgtZDUxYS00NTQ2LWIyZDAtMjg3MDdkZGU0N2Qy';
const oneSignalUrl = `${ONESIGNAL_API_SENDING}/?app_id=${ONESIGNAL_APP_ID}`;

 export async function SendNotification(title, description, link) {

    const AuthStr = 'Basic '.concat(ONESIGNAL_REST_API_KEY);
    const bodyNoUrl = {
        "app_id": ONESIGNAL_APP_ID,
        "included_segments": ["All"],
        "headings": {
            "en": title,
        },
        "contents": {
            "en": description,
        }
    };
    const bodyUrl = {
        "app_id": ONESIGNAL_APP_ID,
        "included_segments": ["All"],
        "headings": {
            "en": title,
        },
        "contents": {
            "en": description,
        },
        "url": link
    };
    const fBody = link ? bodyUrl : bodyNoUrl;
  
    try {
const res = await axios.post(ONESIGNAL_API_SENDING, fBody, {
  headers: {
    Authorization: AuthStr
  }
});
return res;
} catch (err) {
return err;
}

};
export const getNotifications = async () => {
    
        const AuthStr = 'Basic '.concat(ONESIGNAL_REST_API_KEY);
        try {
        const res = await axios.get(oneSignalUrl, {
            headers: {
                Authorization: AuthStr
            }
        });
        const reconstructedRes = res.data.notifications.map((notification) => {
            const android_delivery = notification.platform_delivery_stats.android ?
                notification.platform_delivery_stats.android.successful :
                'untracked';
            const ios_delivery = notification.platform_delivery_stats.ios ?
                notification.platform_delivery_stats.ios.successful :
                'untracked';
            return {
                description: notification.contents.en,
                errored: notification.errored,
                failed: notification.failed,
                title: notification.headings.en,
                id: notification.id,
                ios_delivery,
                android_delivery,
                platform_delivery_stats: notification.platform_delivery_stats,
                remaining: notification.remaining,
                recieved: notification.recieved,
                successful: notification.successful
            };
        });
        return reconstructedRes;
    } catch (err) {
        return 'error';
    }
    };

