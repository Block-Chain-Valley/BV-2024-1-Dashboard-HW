import Modal from '..';
import s from './index.module.scss';
import BaseButton from '@/components/atoms/button/BaseButton';
import Asset from '@/components/atoms/dashboard/Asset';
import TextField from '@/components/atoms/inputs/TextField';
import { ModalContext } from '@/store/GlobalContext';
import { AssetInfo } from '@/store/GlobalContext.d';
import { useContext, useEffect, useRef } from 'react';

/* 
  [HW 2-3] 자산 송금 기능 개발하기 
  - 아래 SendAssetModal 컴포넌트를 완성하여, 자산 송금 기능을 구현해 주세요.
  - 내부 요소가 많기 때문에 컴포넌트를 추가하는 것을 권장해요.
  - libs 폴더에 새로운 유틸리티 함수를 추가해도 괜찮아요.
*/

export interface SendAssetModalProps {
  assetInfo: AssetInfo;
  maxBalance: string;
}

export default function SendAssetModal({ assetInfo, maxBalance }: SendAssetModalProps) {
  const [, setModal] = useContext(ModalContext);
  const ref = useRef<HTMLInputElement>(null);

  /* 
    모달이 열렸을 때, Textfield로 포커스를 주는 코드예요. 
  */
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <Modal>
      <div className={s.send_asset_modal}>
        <div className={s.modal_infos}>
          <div className={s.modal_info}>
            <div className={s.modal_title}>자산을 보낼 주소를 입력하세요.</div>
            <TextField
              placeholder="여기에 자산 주소를 입력하세요."
              ref={ref}
              value={''}
              error={false}
              onChange={() => {}}
            />
          </div>
          <div className={s.modal_info}>
            <div className={s.modal_title}>자산을 보낼 수량을 입력하세요.</div>
            <div className={s.asset_input_container}>
              <Asset address={'0x4950631e0D68A9E9E53b9466f50dCE161F88e42d'} symbol={'TEST'} name={'TEST Token'} />
              <div className={s.asset_input}>
                <TextField placeholder={maxBalance} value={''} error={false} onChange={() => {}} />
              </div>
            </div>
          </div>
        </div>
        <div className={s.modal_message_info}>
          <div className={s.modal_message}>{'보유한 잔액이 부족해요.'}</div>
        </div>
        <div className={s.modal_buttons}>
          <BaseButton
            assert={false}
            name="닫기"
            onClick={() => {
              setModal(null);
            }}
          ></BaseButton>
          <BaseButton assert={true} name="전송하기" disabled={false} onClick={() => {}}></BaseButton>;
        </div>
      </div>
    </Modal>
  );
}
