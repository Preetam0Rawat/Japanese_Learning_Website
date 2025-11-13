import jwt from 'jsonwebtoken'


export const auth = async(req , res , next) =>{
    try{         
        const authHeader = req.header('Authorization')                  
        if(!authHeader || authHeader.split(' ')[1] === 'null'){   
            return res.status(401).json({mssg : "You are unauthorized"})  //Unauthorized
        }

        // In jwt we don't use Basic but Bearer
        const token = authHeader.split(' ')[1]
                           
        const isCustomAuth = token.length < 500
        let decodedData;
                           

        if(token && isCustomAuth){                          
           decodedData = jwt.verify(token, 'test')
            req.userId = decodedData?.id                         
        }else{                         
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
        }
        next()

    }
    catch(error){
        console.log(error)
        res.status(403).json({mssg : "Error occured while authorization"})
    }

}