import {
  isTopicInBloom,
  isContractAddressInBloom,
} from "ethereum-bloom-filters";
import type { BlockTransactionString } from "web3-eth";

const TRANSFER_TOPIC =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const CONTRACT_ADDRESS = "0xdceaf1652a131F32a821468Dc03A92df0edd86Ea";

describe("bloom filter", (): void => {
  describe("fixtures/block-0xAB8C4E.json", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const block: BlockTransactionString = require("../fixtures/block-0xAB8C4E.json")
      .result;
    it("isTopicInBloom", () => {
      expect.assertions(1);
      expect(isTopicInBloom(block.logsBloom, TRANSFER_TOPIC)).toBeTruthy();
    });
    it("isContractAddressInBloom", () => {
      expect.assertions(1);
      expect(
        isContractAddressInBloom(block.logsBloom, CONTRACT_ADDRESS)
      ).toBeTruthy();
    });
  });
  describe("fixtures/block-0xAB8C4D.json", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const block: BlockTransactionString = require("../fixtures/block-0xAB8C4D.json")
      .result;
    it("isTopicInBloom", () => {
      expect.assertions(1);
      expect(isTopicInBloom(block.logsBloom, TRANSFER_TOPIC)).toBeTruthy();
    });
    it("isContractAddressInBloom", () => {
      expect.assertions(1);
      expect(
        isContractAddressInBloom(block.logsBloom, CONTRACT_ADDRESS)
      ).toBeFalsy();
    });
  });
});
