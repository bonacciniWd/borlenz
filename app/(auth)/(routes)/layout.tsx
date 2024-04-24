const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    
    return ( 
        <div className="h-screen flex items-center justify-center">
         <div className="h-screen flex items-center justify-center absolute inset-0 bg-gradient-to-b from-blue-900 via-teal-700 to-green-800 animate-moveGradient">
           <div className="w-full flex items-center justify-center">
            {children}
           </div>
         </div>
       </div> 
     );

}
export default AuthLayout;