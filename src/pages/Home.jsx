import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {base_url} from "../config"

export function Home() {
  const [sites, SetSites] = React.useState([]);
  const [selectedSite, SetSelectedSite] = React.useState("");
  const [password, SetPassword] = React.useState("");
  React.useEffect(() => {
    const getSites = async () => {
      let url = base_url + "/getsites"
      const data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "aa", password: "aa" }),
      };
      const response = await fetch(url, data).then((x) => x.json());
      console.log(response);
      SetSites(response.data);
    };
    getSites();
  }, []);

  const GetPass = async()=>{
    let url = base_url+"/getpassword";
    const data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "aa", password: "aa",site:selectedSite }),
      };
      const response = await fetch(url, data).then((x) => x.json());
      console.log(response);
      SetPassword(response.password)
  }

  const SavePass = async()=>{
    let url = base_url+"/getpassword";
    const data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "aa", password: "aa",site:selectedSite }),
      };
      const response = await fetch(url, data).then((x) => x.json());
      console.log(response);
      SetPassword(response.password)
  }

  return (
    <>
    <div>
      <Select onValueChange={(e) => SetSelectedSite(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a site" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sites.map((x) => {
              return (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedSite != "" ? <Button className="getbtn" onClick={()=>GetPass()}>GetPassword</Button> : ""}
      {
        password != "" ? <div style={{marginTop:"50px"}}>Password : {password}</div> : ""
      }
      </div>
      <div>
      {/* <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Save</CardTitle>
        <CardDescription>Save a password</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Site">Site</Label>
              <Input id="Site" placeholder="Site" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Password">Password</Label>
              <Input type="password" id="Password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={SavePass}>Save</Button>
      </CardFooter>
    </Card> */}
      </div>
    </>
  );
}
