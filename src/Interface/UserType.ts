export interface UserType {
  usuario: {
    userid: string;
    name: {
      value: string;
    };
    password: string;
    status: number;
    defaultzoneid: {
      value: number;
    };
    usertype: {
      value: number;
    };
    usertypename: {
      value: string;
    };
    email: {
      value: string;
    };
    assignedrequests: number;
    assigneddate: {
      value: string;
    };
    usernumberid: number;
    scheduleid: number;
    internalcode: {
      value: string;
    };
    lastchangedate: {
      value: string;
    };
    creationdate: {
      value: string;
    };
    remoteuserssdList: any[];
    userimage: string;
  };
}
