import axios from "axios";
import { AccordionCollapse } from "react-bootstrap";

axios.defaults.baseURL = "https://steph-drf-api.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
