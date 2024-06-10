import { Avatar } from "flowbite-react";

/**
 * https://flowbite-react.com/docs/components/avatar#default-avatar
 * https://flowbite-react.com/docs/components/avatar#sizes
 * https://flowbite-react.com/docs/components/avatar#avatar-with-border
 */
export default function ProfilePicture() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="../../public/profile-pixel-art-upscaled.png" rounded size="xl" bordered />
    </div>
  );
}
