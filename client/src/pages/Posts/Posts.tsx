import Layout from "../../components/Layout";
import React, { useState , useEffect} from "react";
import styled from "styled-components";
import Post from "./Post";

interface PostType {
    id: number,
    title: string,
    content: string,
    userId: number,
};

const StyledPostConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Posts:React.FC = () => {

    const [postsData, setPostsData] = useState<PostType[]>([]);

    useEffect(() => {
        fetch("/post")
        .then(response => {
            if (!response.ok) {
              throw new Error("Błąd sieci: " + response.status);
            }
            return response.text();
            console.log(response);
          })
          .then(text =>{
            console.log(text);
            const data = JSON.parse(text);
            setPostsData(data);
          })
          .catch(error => console.error("Wystąpił błąd przy pobieraniu danych:", error));
    }, []);

    return (
        <Layout>
            <StyledPostConteiner>
                {
                    postsData.map((post) => (
                        <Post 
                            key={post.id} 
                            id={post.id}
                            title={post.title}
                            content={post.content} 
                            userId={post.userId}
                        />
                    ))
                }
            </StyledPostConteiner>
        </Layout>
    );
};

export default Posts;