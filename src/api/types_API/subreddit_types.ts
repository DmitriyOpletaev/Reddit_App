export interface Account {
    	comment_karma:number,
    	has_mail:boolean|null,
    	has_mod_mail:boolean|null,
    	has_verified_email:boolean,
    	id:string,
    	inbox_count?:number, //Number of unread messages in the inbox. Not present if not your account
    	is_friend:boolean,
    	is_gold:boolean,
    	is_mod:boolean,
    	link_karma:number,
    	modhash?:string,//current modhash. not present if not your account
    	name:string,
    	over_18:boolean, //whether this account is set to be over 18
}
