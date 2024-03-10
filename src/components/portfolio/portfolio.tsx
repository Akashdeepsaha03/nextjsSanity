import React from "react";
import styles from "./page.module.css";
import { client } from "@/utils/configSanity";
import {PortableText} from "@portabletext/react";

interface IPortfolio {
    _id: string;
    article: string;
    ques1: string;
    ques2: string;
    ques3: string;
    ques4: string;
    ques5: string;
    ques6: string;
    cques7: string;
    ques8: string;
    ques9: string;
}
interface CategorizedFeedback {
    goodScores: IPortfolio[];
    badScores: IPortfolio[];
    neutralScores: IPortfolio[];
  }

async function getData() {
    const query = `*[_type == 'feedbackform']`;
    const data = await client.fetch(query);
    
    return data as IPortfolio[];

}
// async function getData2() {
//     const query = `*[_type == 'feedback']`;
//     const data: IPortfolio[] = await client.fetch(query);
    
//     const categorizedData: CategorizedFeedback = {
//         goodScores: data.filter(item => item.rating >= 4),
//         badScores: data.filter(item => item.rating < 2),
//         neutralScores: data.filter(item => item.rating === 3),
//     };

//     return categorizedData;
// }

const Portfolio = async() => {
    const data = (await getData()) as IPortfolio[]
    console.log(data);
    // const data2 : CategorizedFeedback = await getData2();
    // console.log(data2);
    return (
        // <div className={styles.container}>
        //     <h1 className={styles.selectTitle}>Portfolio</h1>
        //     <div className={styles.items}>
        //         {data?.map((item) => (
        //             <div key = {item?._id} className={styles.item}>
        //                 <div>
        //                     <span className= {styles.article}>{item?.article}</span>
        //                 </div>
        //                 <div>
        //                     <span className= {styles.comment}>{item?.comment}</span>
        //                 </div>
        //                 <div>
        //                     <span className= {styles.rating}>{item?.rating}</span>
        //                 </div>
        //             </div>
        //         ))}

        //     </div>
        // </div>
        <div style={{ backgroundColor: '#331155', height: '100vh', width: '100vw' }}>
        <div className={styles.container}>
    <h1 className={styles.selectTitle}>Feedback Forms</h1>
    <table className={`${styles.table} ${styles.tableMarginBottom}`}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Topic</th>
                <th>Game Package</th>
                <th>Game Version</th>
                
                <th>Feedback/Suggestions</th>
                <th>Glitches/Errors</th>
                <th>New Ideas</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Contact Info</th>
                <th>ORC Nation Holder</th>
              
            </tr>
        </thead>
        <tbody>
            {data?.map((item, index) => (
                <tr key={item?._id}>
                    <td>{index + 1}</td>
                    <td>{item?.article}</td>
                    <td>{item?.ques1}</td>
                    <td>{item?.ques2}</td>
                    <td>{item?.ques3}</td>
                    <td>{item?.ques4}</td>
                    <td>{item?.ques5}</td>
                    <td>{item?.ques6}</td>
                    <td>{item?.cques7}</td>
                    <td>{item?.ques8}</td>
                    <td>{item?.ques9}</td>
                    
                  
                </tr>
            ))}
        </tbody>
    </table>

    


    

</div>
</div>


    );
};

export default Portfolio;