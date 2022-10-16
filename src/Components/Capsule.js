import {
  Divider,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { apicalls } from "../Api/api";
import Header from "./Header";
import PaginationSection from "./PaginationSection";
import Capsule from "../Images/Capsule.jpg";
import Footer from "./Footer";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const capsuleList = [
  {
    value: "status",
    label: "status",
  },
  {
    value: "type",
    label: "type",
  },
  {
    value: "capsuleId",
    label: "capsuleId",
  },
];
function CapsuleProduct() {
  const [data, setData] = useState([]);
  const [capsule, setCapsule] = useState("");
  const [search, setNewSearch] = useState("");
  const [status, setStatus] = useState(" ");
  const [type, setType] = useState(" ");
  const [perPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: perPage,
  });
  const [newdata, setNewdata] = useState([]);
  useEffect(() => {
    apicalls.itemcall().then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    apicalls.itemcall().then((res) => {
      setNewdata(res.data);
    });
  }, []);

  useEffect(() => {
    if (newdata) {
      newdata.map((item) => {
        return item.dialogue = false;
      });
    }
  }, [newdata]);

  // useEffect(()=>{
  //   console.log(newdata,"::::")
  // },[newdata])

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const handleChange = (e) => {
    setCapsule(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (capsule === "capsuleId") {
      let strr1 = search.charAt(0).toUpperCase() + search.substring(1);
      let fileteredlist = data.filter((item) => {
        return item.capsule_serial.includes(strr1);
      });
      setData(fileteredlist);
    } else if (capsule === "status") {
      let fileteredlist = data.filter((item) => {
        return item.status.includes(status);
      });
      setData(fileteredlist);
    } else if (capsule === "type") {
      let fileteredlist = data.filter((item) => {
        return item.type.includes(type);
      });
      setData(fileteredlist);
    }
  };

  const handleSearch = (e) => {
    apicalls.itemcall().then((res) => {
      setData(res.data);
    });
    setNewSearch(e.target.value);
  };

  const handleClose = (value) => {
    let datacopy = [...newdata]
      datacopy.map((item)=>{
      if(item.capsule_serial === value){
        item.dialogue = false
      }  
    })
    setNewdata(datacopy)
  };
  const handleClickOpen = (value) => {
    let datacopy = [...newdata]
    datacopy.map((item)=>{
      if(item.capsule_serial === value){
        item.dialogue = true
      }   
    })
    setNewdata(datacopy)
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const renderSlides = () =>
    data.slice(pagination.start, pagination.end).map((item) => (
      <div
        key={item.capsule_serial}
        style={{ width: "30%", margin: "5px", border: "1px solid black" }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: "100%" }} src={Capsule} alt="Not Found"></img>
          <Button
            style={{ marginTop: "15px" }}
            variant="outlined"
            onClick={() => handleClickOpen(item.capsule_serial)}
          >
            Details
          </Button>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>{item.capsule_serial}</p>

          <div style={{ textAlign: "center" }}>
            {item.type}
            <br></br>
          </div>

          <div style={{ textAlign: "center" }}>
            {item.status}
            <br></br>
          </div>
        </div>
        {newdata &&
          newdata.length > 0 &&
          newdata.map(
            (newitem, newindex) =>
             newitem.dialogue === true && (
                <Dialog
                  fullScreen
                  open={newitem.dialogue}
                  onClose={()=>{handleClose(item.capsule_serial)}}
                  TransitionComponent={Transition}
                  key={newitem.capsule_serial}
                >
                  <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="close"
                        onClick={handleClose}
                      >
                        <CloseIcon />
                      </IconButton>
                      <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                      >
                        Product Details
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Capsule Serial Number"
                        secondary={newitem.capsule_serial}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Capsule ID"
                        secondary={newitem.capsule_id}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Status"
                        secondary={newitem.status}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Lunch Data"
                        secondary={newitem.original_launch}
                        
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Mission Flight"
                        secondary={newitem.missions[0].flight}
                      
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Mission Name"
                        secondary={newitem.missions[0].name}
                      
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Landing"
                        secondary={newitem.landings}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Type" secondary={newitem.type} />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Details"
                        secondary={newitem.details}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Reuse Count"
                        secondary={newitem.reuse_count}
                      />
                    </ListItem>
                  </List>
                </Dialog>
              )
          )}
      </div>
    ));

  return (
    <div>
      <Header />
      <Divider />
      <div style={{ textAlign: "center" }}>
        <h1>Search Capsule</h1>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="outlined-select-capsule"
              select
              label="Select"
              value={capsule}
              onChange={handleChange}
            >
              {capsuleList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {capsule === "capsuleId" && (
              <TextField
                value={search}
                onChange={handleSearch}
                label="input"
              ></TextField>
            )}
            {capsule === "status" && (
              <TextField
                id="outlined-select-capsule"
                select
                label="Select"
                value={status}
                onChange={(event) => {
                  apicalls.itemcall().then((res) => {
                    setData(res.data);
                  });
                  setStatus(event.target.value);
                }}
              >
                <MenuItem value="retired">Retired</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="destroyed">Destroyed</MenuItem>
              </TextField>
            )}
            {capsule === "type" && (
              <TextField
                id="outlined-select-capsule"
                select
                label="Select"
                value={type}
                onChange={(event) => {
                  apicalls.itemcall().then((res) => {
                    setData(res.data);
                  });
                  setType(event.target.value);
                }}
              >
                <MenuItem value="Dragon 1.0">Dragon 1.0</MenuItem>
                <MenuItem value="Dragon 1.1">Dragon 1.1</MenuItem>
                <MenuItem value="Dragon 2.0">Dragon 2.0</MenuItem>
              </TextField>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField disabled label="Disable Right Now"></TextField>
            <button
              type="submit"
              style={{
                width: "14.50rem",
                height: "3.5rem",
                fontSize: "25px",
                borderRadius: "20px",
                marginTop: "8px",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          pageBreakAfter: "always",
        }}
      >
        {renderSlides()}
      </div>
      <PaginationSection
        perPage={perPage}
        onPaginationChange={onPaginationChange}
        total={data.length}
      />
      <Footer />
    </div>
  );
}

export default CapsuleProduct;
