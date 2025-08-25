export const asyncPromise = () => {
   
      const simulateNetwork = (shouldSuceed: boolean): Promise<string> => {
                console.log("ทดสอบ pending");
                
                return new Promise<string>((resolve , reject) => {
                    setTimeout(() => {
                        if(shouldSuceed){
                            console.log("สถานะสำเร็จ :fulfilled/resolve");
                            resolve("completed")
                        }else {
                            console.log("สถานะไม่สำเร็จ :Reject");
                            reject(new Error("uncompleted"))
                            
                        }
                        
                    }, 2000);
                })    
            }
            // ทำงานไปพร้อมกัน โดยไม่รออันใดอันนึง ให้เสร็จ 
             // console.log(simulateNetwork(true));
             // console.log(simulateNetwork(false));

            //  then catch fianlly
            const promiseChain = () :void => {
                 simulateNetwork(false)
                 .then((result) => {
                    console.log(`ข้อมูลที่ได้รับ ` , result);
                })
                .then(() => {
                    console.log(`ทำงานต่อ`);
                    
                })
                .catch((error) => {
                      console.log(`ทำงานผิดพลาด ` , error);
                      
                })
                .finally(() => {
                     console.log(`จบการทำงาน`);
                     
                })
            }

            promiseChain()
}