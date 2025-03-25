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
        fetch("/api/post")
          .then(response => {
            if (!response.ok) {
              throw new Error("Błąd sieci: " + response.status);
            }
            return response.json();
          })
          .then((data: PostType[]) => setPostsData(data))
          .catch(error =>
            console.error("Wystąpił błąd przy pobieraniu danych:", error)
          );
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