
import data from "../_data/db.json";
import Link from "next/link";
import { LayoutDashboard, User, BookHeart, Bell, Search } from "lucide-react";
function Page() {
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

                    <Link href="/post" style={{
                    color: "purple",
                    marginLeft: "40px",
                    marginTop: "20px",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                <BookHeart />Post</Link>

                    <div style={{marginLeft:"350px", width:"500px",marginTop:"-90px",backgroundColor:"whitesmoke",padding:"10px",borderRadius:"10px",   height:"490px"}}>
                     <h1 style={{ fontSize: "30px" ,color:"black"}}>Post</h1>
                      {data.post.map((item)=>
                      (
                        <div key={item.id}
                            className="p-4 shadow-md hover:shadow-xl transition cursor-pointer">
                            <h2 style={{ color: "purple" }}>{item.title}</h2>
                            <h2 style={{ color: "purple" }}>{item.content}</h2>
                        </div>

                      ))}
                    </div>
            </div>
            </div>
  )
}

export default Page