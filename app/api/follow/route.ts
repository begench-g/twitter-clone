import { NextResponse } from "next/server";
import follows from './data.json'

export async function GET(request:any){
    return NextResponse.json(follows)
}