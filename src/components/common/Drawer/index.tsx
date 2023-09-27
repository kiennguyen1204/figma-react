import { Drawer } from 'rsuite';
import './index.scss'
export default function DrawerComponent({
  size,
  open,
  placement,
  setOpen,
  isMobile,
  children
}: {
  size: any;
  open: any;
  placement: any;
  setOpen: any;
  children: any;
  isMobile:any;
}) {
  return (
    <>
      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() =>
          setOpen(false)
        }
        className={isMobile ? 'draw-mobile' : ''}
        >
        {children}
      </Drawer>
    </>
  );
}
