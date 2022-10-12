import { ContractInterface, providers, Signer } from 'ethers'

export type Provider = providers.BaseProvider

export interface ITransactionSuccess {
	hash: string
	wait: () => Promise<{
		status?: number | undefined
	}>
}

export interface ITransactionError {
	message: string
}

export interface IContractReadConfig {
	address: string
	abi: ContractInterface
	provider: Provider
}

export interface IContractWriteConfig {
	address: string
	abi: ContractInterface
	signer: Signer | null
}

export interface INftApiResponse {
	ownedNfts: {
		id: {
			tokenId: string
		}
		metadata: {
			image: string
		}
		media: { gateway: string }[]
	}[]
}

export interface INftItem {
	tokenId: number
	imgUrl: string
}

export interface IOracleResponse {
	deadline: number
	normalizedNftContract: string
	price: number | null
	signature: {
		r: string
		s: string
		v: number
	}
}

export interface IBorrowPool {
	name: string
	symbol: string
	maxLoanLength: number
	currentAnnualInterest: number
	address: string
}

export interface ILoan {
	id: string
	nftId: string
	interest: string
	startTime: string
	borrowed: string
	toPay: number
	deadline: number
	tokenUri: string
	pool: {
		name: string
		owner: string
		address: string
	}
}
