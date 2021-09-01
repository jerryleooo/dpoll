// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteVote } from "./types/voter/tx";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgCreateVote } from "./types/voter/tx";
const types = [
    ["/cosmonaut.voter.voter.MsgDeleteVote", MsgDeleteVote],
    ["/cosmonaut.voter.voter.MsgCreatePoll", MsgCreatePoll],
    ["/cosmonaut.voter.voter.MsgDeletePoll", MsgDeletePoll],
    ["/cosmonaut.voter.voter.MsgUpdatePoll", MsgUpdatePoll],
    ["/cosmonaut.voter.voter.MsgUpdateVote", MsgUpdateVote],
    ["/cosmonaut.voter.voter.MsgCreateVote", MsgCreateVote],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteVote: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgDeleteVote", value: data }),
        msgCreatePoll: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgCreatePoll", value: data }),
        msgDeletePoll: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgDeletePoll", value: data }),
        msgUpdatePoll: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgUpdatePoll", value: data }),
        msgUpdateVote: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgUpdateVote", value: data }),
        msgCreateVote: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgCreateVote", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
