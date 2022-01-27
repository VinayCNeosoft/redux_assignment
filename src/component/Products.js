import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';

function Products(props) {
    const [data, setData] = useState([])
    const [id,setId]= useState([])


    // fetch data
    const getRepo = () => {
        axios.get('http://localhost:3001/products')
        .then((response)=>{
            //console.log(response)
            const myRepo = response.data;
            setData(myRepo);
        });
        if(localStorage.getItem("mycart")){
            let arr = JSON.parse(localStorage.getItem("mycart"))
            console.log(arr)
            props.counter(arr)
        }
    }
    useEffect(()=>{
        getRepo()
    },[])
    const addCart=(id)=>{
        if(localStorage.getItem('mycart'))
        {
            let arr=JSON.parse(localStorage.getItem('mycart'))
            console.log(arr)
            if (arr.includes(id)) 
            {
                alert("Product Already Added");
            } 
            else 
            {
                arr.push(id);
                localStorage.setItem("mycart", JSON.stringify(arr));
                setId(arr);
                props.counter(arr)
                alert("Product added to Cart");
            }
        } 
        else 
        {
            let arr = [];
            arr.push(id);
            setId(arr);
            localStorage.setItem("mycart", JSON.stringify(arr));
            props.counter(arr)
            alert("Product added to Cart");
        }
    };
    
    return (
    <div className="container row">
        {data.map((proData, id) => (
            <div className="card col-md-3 m-3" key={id}>
                <img className="card-img-top" src={proData.images} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{proData.pname}</h5>
                <p className="card-text">Price: {proData.price}</p>
                <p className="card-text">Quantity: {proData.quantity}</p>
                <button className="btn btn-primary" onClick={() => addCart(proData.id)}>Add To Cart</button>
            </div>
        </div>
        ))}
    </div>
  );
}

const mapDispatchToProps=(dispatch)=>{
    return{
        counter:function(arr){
            dispatch({type:'ADD',payload:arr})
        }
    }
}

export default connect(null,mapDispatchToProps)(Products)
