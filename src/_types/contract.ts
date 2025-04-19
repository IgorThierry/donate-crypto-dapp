type TransactionReceipt = {
  transactionHash: string
  blockHash: string
}

export type CampaignRaw = {
  author: string // address em Solidity vira string em TS
  title: string
  description: string
  videoUrl: string
  imageUrl: string
  balance: bigint // uint256 pode ser representado por bigint
  goal: bigint
  supporters: bigint // idem
  active: boolean
  createdAt: bigint // timestamps geralmente são números grandes
  id: bigint
}

export type Campaign = {
  author: string
  title: string
  description: string
  videoUrl: string
  imageUrl: string
  balance: string // em wei
  goal: string // em wei
  supporters: number // número de apoiadores
  active: boolean
  createdAt: string // timestamp
  id: number // ID da campanha
}

export interface MyContract {
  methods: {
    addCampaign(
      title: string,
      description: string,
      videoUrl: string,
      imageUrl: string,
      goal: string,
    ): {
      send(): Promise<TransactionReceipt>
    }
    editCampaign(
      id: number | string,
      title: string,
      description: string,
      videoUrl: string,
      imageUrl: string,
      goal: string,
    ): {
      send(): Promise<TransactionReceipt>
    }
    nextId(): {
      call(): Promise<number>
    }
    feesBalance(): {
      call(): Promise<bigint>
    }
    getRecentCampaigns(page: number): {
      call(): Promise<[CampaignRaw[], bigint]>
    }
    getUserCampaigns(page: number): {
      call(): Promise<[CampaignRaw[], bigint]>
    }
    campaigns(id: number | string): {
      call(): Promise<CampaignRaw>
    }
    donate(id: number | string): {
      send(options: { value: string }): Promise<TransactionReceipt>
    }
    withdraw(campaignId: number | string): {
      send(options: { from: string }): Promise<TransactionReceipt>
    }
    adminWithdrawFees(): {
      send(): Promise<TransactionReceipt>
    }
  }
}
