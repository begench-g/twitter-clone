import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { any, z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from 'react-query';
import { postTweets } from '@/utils';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type FormData = {
    title:string;
    image:string;
  };

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  const schema: ZodType<FormData> = z
    .object({
      title: z.string().min(5).max(50),
      image: z.string().min(5).url(),
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const mutation = useMutation((newTodo:{title:string,image:string}) => {
    return postTweets(newTodo)
  })

  const submitData = (data: FormData) => {
    console.log("IT WORKED", data);
    handleClose()
    mutation.mutate(data)
  };

  return (
    <div>
       <div onClick={handleOpen} className="text-xl font-medium text-slate-500">
          What’s happening?
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display:'flex', alignItems:'center', justifyContent:'center'}}
      >
       <div  className='bg-slate-200 px-12 py-4 top-10'>
      <form  className="flex justify-center items-center flex-col">
        <label> First Name: </label>
        <input type="text" {...register("title")} />
        {errors.title && <span> {errors.title.message}</span>}
        <label> Image: </label>
        <input type="text" {...register("image")} />
        {errors.image && errors.image?.message}
        <div onClick={handleSubmit(submitData)} >Submit</div>
      </form>
    </div>
      </Modal>
    </div>
  );
}