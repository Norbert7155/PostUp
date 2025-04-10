import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import User from './User';
import Layout from '../../components/Layout';

//dodaj typ

const StyledUsersContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
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
        <Layout>
            <StyledUsersContainer>
                {
                    users.map((user) =>(
                        <User key={user.id} id={user.id} username={user.username}/>
                    ))
                }
            </StyledUsersContainer>
        </Layout>
    );
};
export default Users;