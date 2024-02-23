import React from "react";
import styles from "./page.module.css";
import { client } from "@/utils/configSanity";
import {PortableText} from "@portabletext/react";

interface IPortfolio {
    _id: string;
    article: string;
    comment: string;
    rating: number;
    _createdAt: string;
    notes: string;
    done: boolean;
}
interface CategorizedFeedback {
    goodScores: IPortfolio[];
    badScores: IPortfolio[];
    neutralScores: IPortfolio[];
  }

async function getData() {
    const query = `*[_type == 'feedback']`;
    const data = await client.fetch(query);
    
    return data as IPortfolio[];

}
async function getData2() {
    const query = `*[_type == 'feedback']`;
    const data: IPortfolio[] = await client.fetch(query);
    
    const categorizedData: CategorizedFeedback = {
        goodScores: data.filter(item => item.rating >= 4),
        badScores: data.filter(item => item.rating < 2),
        neutralScores: data.filter(item => item.rating === 3),
    };

    return categorizedData;
}

const Portfolio = async() => {
    const data = (await getData()) as IPortfolio[]
    console.log(data);
    const data2 : CategorizedFeedback = await getData2();
    console.log(data2);
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
        <div className={styles.container}>
    <h1 className={styles.selectTitle}>Feedback Forms</h1>
    <table className={`${styles.table} ${styles.tableMarginBottom}`}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Article</th>
                <th>Comment</th>
                <th>notes</th>
                <th>rating</th>
                <th>is Valid</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((item, index) => (
                <tr key={item?._id}>
                    <td>{index + 1}</td>
                    <td>{item?.article}</td>
                    <td>{item?.comment}</td>
                    <td>{item?.notes}</td>
                    <td>{item?.rating}</td>
                    <td>{item?.done ? '✅' : '❌'}</td>
                </tr>
            ))}
        </tbody>
    </table>

    <h1 className={styles.selectTitle}>Forms Evaluation</h1>
    <table className={`${styles.table} ${styles.tableMarginBottom}`}>
        <thead>
            <tr>
                <th>Score Type</th>
                <th>Count</th>
            </tr>
        </thead>
        <tbody>
        <tr>
          <td>Good Scores</td>
          <td>{data2.goodScores.length}</td>
        </tr>
        <tr>
          <td>Bad Scores</td>
          <td>{data2.badScores.length}</td>
        </tr>
        <tr>
          <td>Neutral Scores</td>
          <td>{data2.neutralScores.length}</td>
        </tr>
      </tbody>
    </table>


    

</div>


    );
};

export default Portfolio;