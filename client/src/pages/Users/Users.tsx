import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import User from './User';

//dodaj typ

const StyledPostsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
   
`;

const Users = () => {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () =>{
            try{
                const res = await fetch("/api/user");
                if(!res.ok){
                    throw new Error("Network response was not ok");
                }
                const users = await res.json();
                setUsers(users);
            }
            catch(err){
                console.error("Wystąpił błąd przy pobieraniu danych:", err);
            }
        }
        fetchUsers();
        console.log(users);
    }, []);

    return (
        <StyledPostsContainer>
            {
                users.map((user) =>(
                    <User key={user.id} id={user.id} username={user.username}/>
                ))
            }
        </StyledPostsContainer>
    );
};
export default Users;