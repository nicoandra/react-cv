// This sample code will make a request to LinkedIn's API to retrieve and print out some
// basic profile information for the user whose access token you provide.

/*

https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=78ab63d32tb3u7&client_secret=ScjywucqfICLASrl&code=AQT2nUv2BQ48xPmMorcFU8p2giDKvdQM_InZ-AhQojSsgXIaHGFL-GTZKsIt7V5zjNM4RvCSElNCtfQU8cjlcYt-wpeITKtfzew0GSBrjEyvX2sReTsIycFZJSDi2MSEuWvQ2m100So27AdQ09Owax-Sywn1YR_65uHuLC2zZmyJ250YkGpGg5itselQiQ&redirect_uri=http://localhost:3001/

*/

const https = require('https');

// Replace with access token for the r_liteprofile permission
const accessToken = 'AQVNzasO0Yqq8VFuSPik_CvA3jnCqSGn5hYhHjgTX-9Z5BKosWc4Ze_qXipqWhPgI3AS__Oy1Qf1L8RsvLqfmWSdCo5NUOH67FgYm6Ie1v3Va34YWVm2rRkwBPrhZplZpwyOcjvxmA5QGjuN7Q5R6EPs5MODRh3EsiTizwEE1VIe-Kc86UHXnurglOpfoCz0KRGiQwni6FcdljQ4I7ujD5Dr_rflgCKVp21FkURX4MSHoGL275ynx213EpOISyjKJPWdudFXfTHofuPkX9FSuoOqtxjO46MT3XqCTvlstxST4xV2fRWbP-VkAHmwFJsSscRRewMpjkeshLlm_rV7j96vipYQKw';
const options = {
  host: 'api.linkedin.com',
  path: '/v2/me',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};

const profileRequest = https.request(options, function(res) {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const profileData = JSON.parse(data);
    console.log(JSON.stringify(profileData, 0, 2));
  });
});
profileRequest.end();