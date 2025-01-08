import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"ahksfqfpembbdwjsynsg.supabase.co",
        pathname:"/storage/v1/object/public/Table%20Images/**",
      }
    ]
  }
};

export default nextConfig;
// https://ahksfqfpembbdwjsynsg.supabase.co/storage/v1/object/public/Table%20Images/table1.jpg