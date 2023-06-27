import React from 'react';
import { useStateValue } from '../reducer/ContextProvider';
import "./SelectedItem.css";
import ClearIcon from '@mui/icons-material/Clear';
import useMediaQuery from "@mui/material/useMediaQuery";

const SelectedItems = () => {
    const [{togleBasket}, dispatch] = useStateValue();
    const isActive = useMediaQuery("(max-width: 550px)");

    const handleClose = (id) => {
        dispatch({
            type: "REMOVE_FROM_TOGLEBASKET",
            id: id
        })
    }

  return (
    <>
    {!isActive&&(
            <div>
                {togleBasket.map(item => (
                    <div key={item.id} className="selectedItem">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                        <i>
                            <ClearIcon onClick={e => handleClose(item.id)} />
                        </i>
                    </div>
                    ))
                }
            </div>
        )
    }
    {
        isActive&&(
            <div>
                {togleBasket.map(item => (
                    <div key={item.id} className="res_msg">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                        <i>
                            <ClearIcon onClick={e => handleClose(item.id)} />
                        </i>
                    </div>
                    ))
                } 
            </div>
        )
    }

    </>
  )
}

export default SelectedItems;
