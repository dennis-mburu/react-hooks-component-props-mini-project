import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <main>
            {posts.map((elem) => 
            <Article key={elem.id} title={elem.title} date={elem.date} preview={elem.preview}/>
            )}
        </main>
    )
}

export default ArticleList