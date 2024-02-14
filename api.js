// api.js;
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Could not fetch data:', error);
    };
};


export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Could not fetch data:', error);
    }
}

export async function checkLaunchConditions(rocket, planet) {
    try {
        const apiURL = `https://api.launchchecker.com/?rocket=${rocket}&planet=${planet}`;
        
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
        
        });

        if (!response.ok) {
            throw new Error(`API call error! status: ${response.status}`);
        }

        const conditions = await response.json();
        return conditions;
    } catch (error) {
        console.error('Could not check launch conditions:', error);
    }

}
