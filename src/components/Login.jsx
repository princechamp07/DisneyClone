
function Login() {
    return (
        <div className="bg-[url('/images/images/login-background.jpg')] absolute h-full bg-cover bg-top bg-no-repeat z-[-1] top-0 right-0 left-0">
    <div className="flex flex-col text-center h-[100vh]">
        <div className="py-[80px] px-[40px] mb-[10vw] w-full relative min-h-[100vh] box-border flex justify-center items-center flex-col">
         <div className="max-w-[650px] w-full flex flex-col">
          <img src="./images/images/cta-logo-one.svg" className="mb-12px max-w-[600px] min-h-[1px] block w-full mt-0 " />
         <button className="font-bold text-cyan-50 bg-blue-800 mb-[12px] w-full tracking-[1.5px] text-lg py-[16.5px] border-transparent border border-solid rounded hover:bg-blue-600">
            GET ALL THERE
         </button>
         <p className="text-gray-300 text-sm tracking-[1.5px] mb-[24px]">
            Get Premier Access To Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 22/03/2024, the price of Disney+ and The Disney Bundle will increase by $1.
         </p>
         <img src="./images/images/cta-logo-two.png" className="max-w-[600px] mb-[20px] inline-block align-bottom w-full" />
         </div>
</div>
        </div>
    </div>
    );
}



export default Login;