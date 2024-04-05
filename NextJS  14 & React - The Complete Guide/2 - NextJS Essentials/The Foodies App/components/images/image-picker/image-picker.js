'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState('');

    const imageRef = useRef();

    function handleImagePick() {
        imageRef.current.click();
    }

    function handleImageChange(e) {
        const file = e.target.files[0];

        if (!file) {
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Picked Yet!</p>}
                    {pickedImage && <Image src={pickedImage} alt="The image selected by user." fill />}
                </div>
                <input
                    ref={imageRef}
                    className={classes.input}
                    type='file'
                    id='image'
                    accept="image/png, image/jpeg"
                    name={name}
                    required
                    onChange={handleImageChange}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handleImagePick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}