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
    margin:90px 400px;
    z-index: 1;
`;

const Posts:React.FC = () => {

    const [postsData, setPostsData] = useState<PostType[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const res = await fetch("/api/post");
                if(!res.ok){
                    throw new Error("Network response was not ok");
                }
                const posts = await res.json();
                setPostsData(posts);
            }
            catch(err){
                console.error("Wystąpił błąd przy pobieraniu danych:", err);
                
            }
        };

        fetchPosts();

        const intervalId = setInterval(() => {
            fetchPosts();
          }, 20000); // odświeżanie co 20s
        
          return () => clearInterval(intervalId);
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