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

    const getCompanies= async () => {
        try{
            const entries = await client.getEntries({
                content_type: "company",
                select: "fields.name"
            })
            return entries.items;
        }catch(e){
            console.log(`Error fetching skills: ${e}` )
        }
    }
    

    //query useage query("project",[{field:"company",value: "FutureProof"}])
    const query = async (collection, queries) => {
        const assumbleQuery = {
            content_type: collection
        }
        for(const param of queries){
            assumbleQuery[param.key] = param.value;
        }

        try{
            const entries = await client.getEntries(assumbleQuery);
            return entries.items;
        }catch(e){
            console.log(`Error fetching skills: ${e}` )
        }


    }

    return {getSkills, getCompanies, query};
}
export default useContentful;
