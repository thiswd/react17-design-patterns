import { FC, createContext, useState, useEffect, ReactElement, useCallback } from 'react'
import axios from 'axios'

export type Issue = {
  number: number
  title: string
  url: string
  state: string
}

interface IIssueContext {
  issues: Issue[]
  url: string
}

interface Props {
  children: ReactElement
  url: string
}

export const IssueContext = createContext<IIssueContext>({
  issues: [],
  url: ''
})

const IssueProvider: FC<Props> = ({ children, url }): ReactElement => {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async () => {
    const response = await axios(url)

    if (response) {
      setIssues(response.data)
    }
  }, [url])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const context = {
    issues,
    url
  }

  return <IssueContext.Provider value={context}>{children}</IssueContext.Provider>
}

export default IssueProvider
