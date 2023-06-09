import { Button } from "@mui/material";


const BtnOutline = ({text}) => {

    const outline ={
        bgColor:"#59b0f8",
        fontFamily:"poppins",
        textTransform:"capitalize",
        fontSize:"16px",
        color:"#77bef8"
    }

    return (
        <div>
            <Button variant="outlined" style={outline}>{text}</Button>
        </div>
    );
};

export default BtnOutline;