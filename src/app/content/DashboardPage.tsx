"use client";

import data from "../_data/db.json";
import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, User, BookHeart, Bell, Search } from "lucide-react";

const DashboardPage = () => {
  
const [search, setSearch] = useState("");


const filteredUsers = data.user.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

const selectedUser = data.user.find(
  (user) => user.id === selectedUserId
);

const userPosts = data.post.filter(
  (post) => post.id === selectedUserId
);

  return (
    <div style={{backgroundColor:"white"}}>
  <div style={{backgroundColor:"white", height:"620px",width:"300px", boxShadow: "5px 0px 15px rgba(0,0,0,0.2)" , marginTop:"-20px"}}>
  <Link href="/"
  style={{
    color: "purple",
    marginLeft: "40px",
    marginTop: "20px",
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}
>
  <LayoutDashboard />
  Dashboard
</Link>
    <Link href="/user" style={{
    color: "purple",
    marginLeft: "40px",
    marginTop: "20px",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>
    <User/>User</Link>

      <Link
      href="/post"
       style={{
        color: "purple",
        marginLeft: "40px",
        marginTop: "20px",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
      <BookHeart />Post</Link>
  </div>

  {/* right side ko container */}
  <div>

    <h2 style={{backgroundColor:"white", display:"flex", color:"black",marginLeft:"350px",marginTop:"-610px", fontSize:"25px"}}>User & Post

      <Bell style={{marginLeft:"800px", marginTop:"10px"}}/>
    </h2>
    <p style={{color:"black", marginLeft:"350px",fontSize:"15px"}}>Browser user and their post</p>
  </div>

{/* Search Bar */}
        <div style={{marginLeft:"350px"}}>
            <Search
    style={{ position: "absolute", left: "360px", top: "84px", color: "gray" }}
    size={20}
  />
                    <input
            type="text"
            placeholder="Search users..."
            onChange={(e) => setSearch(e.target["value"])}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-400 text-black"
          />
        </div>


        {/* User Cards */}
  
      <div style={{marginLeft:"350px", width:"500px",marginTop:"10px",backgroundColor:"whitesmoke",padding:"10px",borderRadius:"10px",   height:"490px"}}>
                            <h1 style={{color:"black",fontSize:"20px"}}>User</h1>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 shadow-md hover:shadow-xl transition cursor-pointer"
                    onClick={() => setSelectedUserId(item.id)}
                  >
                <h2 className="text-xl font-semibold text-gray-800" style={{color:"purple"}}>
                  {item.name}
                </h2>

              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">
              No users found.
            </p>
          )}
      </div>

    <div style={{backgroundColor:"white",height:"500px",width:"300px"}}>
         <div style={{marginLeft:"870px", width:"500px",marginTop:"-490px",backgroundColor:"whitesmoke",padding:"10px",height:"300px",borderRadius:"10px"}} >

                         <h1 style={{color:"black",fontSize:"20px"}}>Posted By</h1>
               {selectedUser ? (
  <>
    <h2 style={{ color: "purple", fontSize: "20px" }}>
      {selectedUser.name}
    </h2>

    {userPosts.length > 0 ? (
      userPosts.map((post) => (
        <div key={post.id} style={{ marginTop: "10px" }}>
          <h3 style={{ fontWeight: "bold",color:"black" }}>
            {post.title}
          </h3>
          <p style={{ color: "black" }}>
            {post.content}
          </p>
        </div>
      ))
    ) : (
      <p>No posts found</p>
    )}
  </>
) : (
  <p style={{ color: "gray" }}>
    Click a user to see their posts
  </p>
)}
         </div>
      </div>
      </div>
  );
};

export default DashboardPage;