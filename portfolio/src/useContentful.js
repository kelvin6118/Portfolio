import React from 'react';
import { createClient } from "contentful"

 const useContentful = () => {
    const spaceID = process.env.REACT_APP_CONTENFUL_SPACE_ID;
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
    const client = createClient({
        space: spaceID,
        accessToken: accessToken,
        host: "preview.contentful.com"
    })
    
    //query search 'fields.<field name>[match]': "<field value>",
    const getSkills = async () => {
        try{
            const entries = await client.getEntries({
                content_type: "skills",
                
            })
            return entries.items;
        }catch(e){
            console.log(`Error fetching skills: ${e}` )
        }
    }

    const getProjects= async (company) => {
        try{
            const entries = await client.getEntries({
                content_type: "project",
                'fields.company[match]': `${company}`
            })
            return entries.items;
        }catch(e){
            console.log(`Error fetching skills: ${e}` )
        }
    }

    return {getSkills, getProjects};
}
export default useContentful;
